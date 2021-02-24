export function ProgressBar() {
  return (
    <header className='progress-bar'>
        <span>0 xp</span>
        <div>
          <div style={{width: '50%'}}/>

          <span className='current-progress' style={{ left:'50%' }}>300 xp</span>
        </div>
        <span>600 xp</span>
    </header>
  );
}