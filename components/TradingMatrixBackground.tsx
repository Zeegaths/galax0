"use client";

import React, { useEffect, useRef } from 'react';

interface TradingDataItem {
  symbol: string;
  price: string;
  change: string;
  x: number;
  y: number;
  speed: number;
  direction: number;
  size: number;
}

const TradingMatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Early return if canvas is null
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return; // Early return if context is null
    
    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Characters for the matrix effect (numbers and trading symbols)
    const chars = '01234567890.,$€£¥+-×÷=%';
    
    // Column settings
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Create drops at different positions
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100); // Start above the canvas at random positions
    }
    
    // Trading data simulation
    const tradingData: TradingDataItem[] = [];
    for (let i = 0; i < 40; i++) {
      tradingData.push({
        symbol: ['BTC', 'ETH', 'SOL', 'ADA', 'DOT'][Math.floor(Math.random() * 5)],
        price: (Math.random() * 100000).toFixed(2),
        change: (Math.random() * 10 - 5).toFixed(2),
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 0.5 + 0.1,
        direction: Math.random() > 0.5 ? 1 : -1,
        size: Math.random() * 5 + 10
      });
    }
    
    // Draw matrix effect
    const drawMatrix = () => {
      // Semi-transparent background to create fading effect with more opacity
      ctx.fillStyle = 'rgba(23, 16, 49, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw a solid background in the center first
      const solidCenterRadius = Math.min(canvas.width, canvas.height) * 0.4;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, solidCenterRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#171031'; // Completely solid center with the exact background color
      ctx.fill();
      
      // Add a more solid color gradient that fades from the solid center
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, solidCenterRadius,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      gradient.addColorStop(0, 'rgba(23, 16, 49, 1)'); // Completely solid at inner edge
      gradient.addColorStop(0.3, 'rgba(23, 16, 49, 0.8)');
      gradient.addColorStop(0.7, 'rgba(23, 16, 49, 0.5)');
      gradient.addColorStop(1, 'rgba(23, 16, 49, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Matrix rain characters (reduced opacity for better content visibility)
      ctx.fillStyle = 'rgba(10, 136, 136, 0.7)';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        // Calculate distance from center
        const xPos = i * fontSize;
        const yPos = drops[i] * fontSize;
        const dx = xPos - canvas.width / 2;
        const dy = yPos - canvas.height / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only draw characters outside the solid center area
        if (distance > solidCenterRadius) {
          // Random character
          const char = chars[Math.floor(Math.random() * chars.length)];
          
          // Calculate opacity based on distance from center
          // Further from center = more visible
          const distanceRatio = (distance - solidCenterRadius) / (canvas.width / 2);
          const opacity = Math.min(distanceRatio * 0.5, 0.3);
          
          ctx.fillStyle = `rgba(1, 243, 244, ${opacity})`;
          
          if (yPos > 0) {
            ctx.fillText(char, xPos, yPos);
          }
        }
        
        // Move drops down
        drops[i]++;
        
        // Reset drops when they reach bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }
      
      // Draw floating trading data only outside the center solid area
      tradingData.forEach(data => {
        // Move data
        data.x += data.speed * data.direction;
        
        // Bounce off edges
        if (data.x < 0 || data.x > canvas.width) {
          data.direction *= -1;
        }
        
        // Calculate distance from center
        const dx = data.x - canvas.width / 2;
        const dy = data.y - canvas.height / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only draw outside the solid center
        if (distance > solidCenterRadius) {
          // Draw trading info
          ctx.font = `${data.size}px monospace`;
          
          // Calculate opacity based on distance - further from center = more visible
          const distanceRatio = (distance - solidCenterRadius) / (canvas.width / 2);
          const baseOpacity = Math.min(distanceRatio * 0.3, 0.25);
          
          // Color based on change (green for positive, red for negative) with distance-based opacity
          const colorValue = parseFloat(data.change) >= 0 ? 
            `rgba(0, 255, 136, ${baseOpacity})` : 
            `rgba(255, 68, 68, ${baseOpacity})`;
          
          ctx.fillStyle = colorValue;
          ctx.fillText(`${data.symbol} $${data.price} ${data.change}%`, data.x, data.y);
        }
      });
      
      // Price chart lines simulation only at the edges
      ctx.lineWidth = 1;
      
      // Create random wavy lines for bottom section
      const lineCount = 3;
      for (let l = 0; l < lineCount; l++) {
        ctx.beginPath();
        
        // Start position - changed 'let' to 'const' as it's never reassigned
        const startY = canvas.height - (canvas.height / 4) * Math.random() - 50;
        ctx.moveTo(0, startY);
        
        // Create wave points
        const points = 10;
        const segmentWidth = canvas.width / points;
        
        for (let i = 1; i <= points; i++) {
          const x = i * segmentWidth;
          const variance = Math.random() * 60 - 30;
          const y = startY + variance;
          
          // Calculate distance from center for this point
          const dx = x - canvas.width / 2;
          const dy = y - canvas.height / 2;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Adjust opacity based on distance from center
          const distanceRatio = (distance - solidCenterRadius) / (canvas.width / 2);
          const opacity = Math.max(0, Math.min(distanceRatio * 0.2, 0.15));
          
          ctx.lineTo(x, y);
          
          // Set color based on line index with distance-based opacity
          if (l === 0) {
            ctx.strokeStyle = `rgba(254, 102, 79, ${opacity})`;
          } else if (l === 1) {
            ctx.strokeStyle = `rgba(1, 243, 244, ${opacity})`;
          } else {
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.7})`;
          }
        }
        
        ctx.stroke();
      }
      
      requestAnimationFrame(drawMatrix);
    };
    
    const animation = requestAnimationFrame(drawMatrix);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animation);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default TradingMatrixBackground;