import EditorJs from '@editorjs/editorjs';
import Header from '@editorjs/editorjs';
import List from '@editorjs/editorjs';
import Embed from '@editorjs/editorjs';

const editor = new EditorJs({
    holderId: 'editorjs',

    tools: {
        header: {
            class: Header,
            inlineToolbar: ['link']
        },
        list: {
            class: List,
            inlineToolbar: [
                'link',
                'bold'
            ]
        },
        embed: {
            class: Embed,
            inlineToolbar: false,
            config: {
                services: {
                    youtube: true,
                    coub: true
                }
            },
        },  
    }
})

let saveBtn = document.querySelector('button');

saveBtn.addEventListener('click', function(){
    editor.saver().then((outputData) => {
        console.log('Article data: ',outputData)
    }).catch((error) => {
        console.log('Saving failed:', error)
    });
})