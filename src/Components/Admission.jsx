import { useEffect, useState } from 'react';
import Collegename from './Collegename';

const Admission = () => {
 const [name, setName] = useState([])
        useEffect( () => {
                fetch(`http://localhost:5000/allcollege?search`)
                .then(res => res.json())
                .then(data => setName(data))
               

        }, [ ])
        
        return (
                <div>
                        {
                                name.map(namecollege => 
                                    <Collegename key={namecollege._id}
                                    name = {namecollege}
                                    ></Collegename>    
                                        )
                        }
                </div>
        );
};

export default Admission;