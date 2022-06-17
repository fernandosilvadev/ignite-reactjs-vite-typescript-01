
import { Post, PostProps } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar} from "./components/Sidebar"

import styles from "./App.module.css"

import './global.css'


interface post extends PostProps {
  id: number
}

const posts: post[] = [
  {
    id: 1,
    author: { 
      avatarUrl: "https://github.com/fernandosilvadev.png",
      name: "Fernando Silva",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Aqui vai o texto do conteúddo'},
      {type: 'paragraph', content: 'Aqui vai o texto do conteúddo da segunda linha'},
      {type: 'link', content: 'https://phersonal.com.br'},
    ],
    publishedAt: new Date('2022-06-13 23:36:00')
  },
  {
    id: 2,
    author: { 
      avatarUrl: "https://github.com/fernandosilvadev.png",
      name: "Mayk Brito",
      role: "Designer"
    },
    content: [
      {type: 'paragraph', content: 'Aqui vai o texto do conteúddo'},
      {type: 'paragraph', content: 'Aqui vai o texto do conteúddo da segunda linha'},
      {type: 'link', content: 'https://rocketseat.com.br'},
    ],
    publishedAt: new Date('2022-06-14 23:36:00')
  }
]

export function App() {

  return (
    <div >
    <Header/>

    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
     {posts.map(post => {
       return (
       <Post
        key={post.id}
        author={post.author}
        content={post.content}
        publishedAt={post.publishedAt}
       />
       )
     })}  
      </main>
    </div>
    </div>
  )
}
