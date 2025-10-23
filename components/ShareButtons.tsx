
import React from 'react';
import { FacebookIcon, TwitterIcon, WhatsAppIcon, PinterestIcon, LinkedInIcon } from './icons/Icons';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <FacebookIcon className="h-6 w-6" />,
      colorClass: 'hover:text-blue-600',
    },
    {
      name: 'Twitter',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <TwitterIcon className="h-6 w-6" />,
      colorClass: 'hover:text-blue-400',
    },
    {
      name: 'WhatsApp',
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      icon: <WhatsAppIcon className="h-6 w-6" />,
      colorClass: 'hover:text-green-500',
    },
    {
      name: 'Pinterest',
      href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
      icon: <PinterestIcon className="h-6 w-6" />,
      colorClass: 'hover:text-red-600',
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      icon: <LinkedInIcon className="h-6 w-6" />,
      colorClass: 'hover:text-blue-700',
    },
  ];

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Share:</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${link.name}`}
          className={`text-gray-500 dark:text-gray-400 transition-colors ${link.colorClass}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};