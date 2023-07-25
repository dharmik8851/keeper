import Header from "./Header";
import Note from "./note";
import Footer from "./Footer";
import noteList from "../noteList.js";



export default function App(){
  return <div>
    <Header/>
    <div id="body">
    {noteList.map(
      (note)=>(<Note title={note.title} content={note.content}/>)
    )}
    </div>
    <Footer/>
  </div>;
}