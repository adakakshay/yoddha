import { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { RefreshCw } from 'lucide-react';

interface SimpleCaptchaProps {
  onValidate: (isValid: boolean) => void;
}

export function SimpleCaptcha({ onValidate }: SimpleCaptchaProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let text = '';
    for (let i = 0; i < 6; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(text);
    setUserInput('');
    onValidate(false);
    return text;
  };

  const drawCaptcha = (text: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background with gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#fff5f0');
    gradient.addColorStop(1, '#ffe4d9');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add noise lines
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(249, 115, 22, ${Math.random() * 0.3})`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    // Draw text
    ctx.font = 'bold 32px Arial';
    ctx.textBaseline = 'middle';
    
    const spacing = canvas.width / (text.length + 1);
    for (let i = 0; i < text.length; i++) {
      ctx.save();
      
      // Random rotation
      const x = spacing * (i + 1);
      const y = canvas.height / 2;
      const angle = (Math.random() - 0.5) * 0.4;
      
      ctx.translate(x, y);
      ctx.rotate(angle);
      
      // Random color from orange/red palette
      const colors = ['#f97316', '#ea580c', '#dc2626', '#c2410c'];
      ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
      ctx.fillText(text[i], 0, 0);
      
      ctx.restore();
    }

    // Add noise dots
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = `rgba(249, 115, 22, ${Math.random() * 0.5})`;
      ctx.fillRect(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        2,
        2
      );
    }
  };

  useEffect(() => {
    const text = generateCaptcha();
    drawCaptcha(text);
  }, []);

  const handleRefresh = () => {
    const text = generateCaptcha();
    drawCaptcha(text);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setUserInput(value);
    onValidate(value === captchaText);
  };

  return (
    <div className="space-y-3">
      <label className="block font-medium">Security Check (CAPTCHA)</label>
      <Card className="p-4 bg-orange-50/50">
        <div className="flex items-center gap-3">
          <canvas
            ref={canvasRef}
            width="240"
            height="60"
            className="border-2 border-orange-200 rounded bg-white"
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            className="flex-shrink-0"
          >
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter the characters above"
          maxLength={6}
          className="w-full mt-3 px-4 py-2 border-2 border-orange-200 rounded-md focus:outline-none focus:border-orange-500 uppercase tracking-wider"
        />
      </Card>
    </div>
  );
}
