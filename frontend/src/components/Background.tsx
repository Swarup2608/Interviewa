export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="grid-bg absolute inset-0 opacity-20"></div>
      <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-primary-dim/20 rounded-full blur-[150px] animate-pulse-glow"></div>
      <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-secondary-container/15 rounded-full blur-[130px] animate-pulse-glow" style={{ animationDelay: "-2s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tertiary-container/5 rounded-full blur-[180px]"></div>
      
      <div className="light-trail" style={{ left: "15%", animationDelay: "0s", opacity: 0.3 }}></div>
      <div className="light-trail" style={{ left: "45%", textIndent: 0, animationDelay: "1.5s", opacity: 0.2 }}></div>
      <div className="light-trail" style={{ left: "85%", textIndent: 0, animationDelay: "0.7s", opacity: 0.4 }}></div>
    </div>
  );
}
