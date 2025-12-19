import React, { useState } from 'react';
import styles from './styles.module.css';

interface CopyButtonProps {
  code: string;
}

export default function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
      onClick={handleCopy}
      title="Copy to clipboard"
      aria-label="Copy code to clipboard"
    >
      {copied ? '✓ Copied!' : '📋 Copy'}
    </button>
  );
}

