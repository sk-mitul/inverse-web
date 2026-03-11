import React from 'react';

const logos = [
  { name: 'Linear', src: '/logo-linear.png' },
  { name: 'Framer', src: '/logo-framer.png' },
  { name: 'Notion', src: '/logo-notion.png' },
  { name: 'Slack', src: '/logo-slack.png' },
  { name: 'Medium', src: '/logo-medium.png' },
  { name: 'Upwork', src: '/logo-upwork.png' },
  { name: 'Amazon', src: '/logo-amazon.png' },
  { name: 'Asana', src: '/logo-asana.png' },
];

function LogoGrid() {
  return (
    <section id="logoGrid" className="mx-auto max-w-326.25 px-3.75 lg:pt-0 py-7.5 mb-7.5 lg:mb-22.5">
      <div className="grid grid-cols-1 md:grid-cols-4 border-t border-l border-2 border-lavender-gray">
        {logos.map((logo, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center py-6 md:py-10 px-10 border-r border-b border-2 border-lavender-gray transition-colors hover:bg-lavender-gray/50 group"
          >
            <img
              src={logo.src}
              alt={`${logo.name} logo`}
              className="w-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
export default LogoGrid;