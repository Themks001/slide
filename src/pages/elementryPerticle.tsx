import React, { useState } from 'react';

// Elementary Particle Data
const particleData = [
  {
    name: 'Quarks',
    particles: [
      { name: 'Up Quark', description: '...' },
      { name: 'Down Quark', description: '...' },
      // Add more quarks as needed
    ],
  },
  {
    name: 'Leptons',
    particles: [
      { name: 'Electron', description: '...' },
      { name: 'Muon', description: '...' },
      // Add more leptons as needed
    ],
  },
  {
    name: 'Bosons',
    particles: [
      { name: 'Photon', description: '...' },
      { name: 'W Boson', description: '...' },
      // Add more bosons as needed
    ],
  },
  // Add more particle categories as needed
];

// Recursive Particle Component
const Particle = ({ particle }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <h3 onClick={toggleCollapsed} style={{ cursor: 'pointer' }}>
        {particle.name} {collapsed ? '+' : '-'}
      </h3>
      {!collapsed && (
        <div>
          <p>{particle.description}</p>
          {particle.particles && (
            <ul>
              {particle.particles.map((subParticle, index) => (
                <li key={index}>
                  <Particle particle={subParticle} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

// Main ParticleTree Component
const ParticleTree = () => (
  <div>
    <h1>Elementary Particles</h1>
    {particleData.map((category, index) => (
      <div key={index}>
        <Particle particle={category} />
      </div>
    ))}
  </div>
);

export default ParticleTree;
