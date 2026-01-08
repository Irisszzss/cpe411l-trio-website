import React from 'react';
import { Github, Linkedin, Mail, User } from 'lucide-react';
import '../styles/Team.css';

/*team member names*/


const Team = () => {
  const members = [
    {
      name: "Charles Larr Sanchez",
      role: "Hardware Lead",
      desc: "Designed the PCB and enclosure mechanisms.",
      color: "#2563eb"
    },
    {
      name: "Aliyah Katrin Biado",
      role: "Software Architect",
      desc: "Built the React frontend and cloud integration.",
      color: "#0ea5e9"
    },
    {
      name: "Colleen Iris Jones",
      role: "Firmware Engineer",
      desc: "Optimized ESP32 Bluetooth latency.",
      color: "#2563eb"
    },
    {
      name: "Allysa Mariz Hipolito",
      role: "Research Head",
      desc: "Conducted classroom usability testing.",
      color: "#0ea5e9"
    }
  ];

  return (
    <section className="team-page">
      <div className="team-header">
        <h1>The Creators</h1>
        <p>The engineering students behind SmartStroke.</p>
      </div>

      <div className="team-grid">
        {members.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="profile-circle" style={{background: `rgba(${index % 2 === 0 ? '37, 99, 235' : '14, 165, 233'}, 0.1)`}}>
               <User size={48} color={member.color} />
            </div>
            <h3>{member.name}</h3>
            <span className="role-badge">{member.role}</span>
            <p>{member.desc}</p>
            <div className="social-row">
              <Github size={18} className="social-link"/>
              <Linkedin size={18} className="social-link"/>
              <Mail size={18} className="social-link"/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;