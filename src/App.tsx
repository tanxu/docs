import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="card">
      <span className="badge">React 19 · TypeScript · Vite</span>
      <h1>tanxu / docs</h1>
      <p>这是部署在 GitHub Pages 项目站 <code>/docs/</code> 路径下的 React 19 应用。</p>
      <button onClick={() => setCount((c) => c + 1)}>
        点击次数：{count}
      </button>
    </main>
  )
}
