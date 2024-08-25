import { useState } from "react"

function ParaGenr(){
    const [para,setPara] = useState('')
    const [words, setWords] = useState();
    const wordsArr = ['cat', 'dog', 'house', 'car', 'tree', 'book', 'computer', 'mountain', 'beach', 'sun'];

    let sentence = '';
    function genratePara(){
        for(let i = 0;i < words;i++){
            const randomWord = Math.floor(Math.random() * 10)
            sentence += wordsArr[randomWord] + ' '
        }
        setPara(sentence);
    }
    return(
        
        <div style={{ 
            padding :'5px',
            // border:'1px solid grey',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            gap:'15px'
            }}>
            <h3>Para Generator</h3>
            <div style={{display:'flex', gap:'15px',flexWrap:'wrap', height:'40px',}}>
                <div>
                    <input type="number"
                           style={{height: '100%', boxSizing:'border-box', width: '400px'}} 
                           placeholder="Enter number of words" 
                           value={words}
                           onChange={(e) =>setWords(e.target.value)}
                    />
                </div>
                <div>
                    <button 
                        style={{
                            height: '100%', boxSizing:'border-box',
                            borderRadius:'15px',
                            background:'#222222',
                            color:'white',
                            padding:'10px'
                        }}
                        onClick={genratePara} 
                        >Generate
                    </button>
                </div>
            </div>
            {para}
        </div>
        
    )
}
export default ParaGenr