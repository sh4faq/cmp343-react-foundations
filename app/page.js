import LikeButton from './like-button';

function Header({ title }) {
  return <h1 style={{ textAlign: 'center', color: '#333' }}>
    {title ? title : 'Default title'}
  </h1>;
}

function DeveloperList({ developers }) {
  return (
    <div style={{ margin: '20px 0' }}>
      <h2>Famous Developers & Computer Scientists:</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {developers.map((name) => (
          <li key={name} style={{ 
            backgroundColor: '#e3f2fd', 
            margin: '10px 0', 
            padding: '15px', 
            borderRadius: '8px',
            borderLeft: '4px solid #2196f3'
          }}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HomePage() {
  const developers = [
    'Ada Lovelace - First computer programmer',
    'Grace Hopper - Invented the first compiler', 
    'Margaret Hamilton - Led Apollo flight software team',
    'Katherine Johnson - NASA mathematician',
    'Frances Allen - Pioneered compiler optimization'
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Header title="Develop. Preview. Ship. 🚀" />
      
      <div style={{ 
        backgroundColor: '#f0f8ff', 
        padding: '20px', 
        borderRadius: '8px', 
        margin: '20px 0',
        borderLeft: '4px solid #4CAF50'
      }}>
        <h3>🎉 React Foundations Tutorial Complete!</h3>
        <p><strong>Chapter 3:</strong> Updated UI with JavaScript</p>
        <p><strong>Chapter 4:</strong> Got started with React</p>
        <p><strong>Chapter 5:</strong> Built UI with Components</p>
        <p><strong>Chapter 6:</strong> Displayed data with Props</p>
        <p><strong>Chapter 7:</strong> Added interactivity with State</p>
        <p><strong>Chapter 8-10:</strong> Migrated to Next.js with Server/Client Components</p>
      </div>

      <DeveloperList developers={developers} />
      <LikeButton />
    </div>
  );
}