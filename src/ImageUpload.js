import { Button } from '@material-ui/core'
import React from 'react'

function ImageUpload() {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');
    
    return (
        <div>
            <input type="text" value={} onChange={event => setCaption(event.target.value)} placeholder="Enter the caption"/>
            <input type="file" onChange={handleChange}/>
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}

export default ImageUpload
