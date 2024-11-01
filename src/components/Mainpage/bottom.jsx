import { useDispatch } from 'react-redux';
import '../../css/mainpage.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { changeTemplates } from '../../states/action-creators';
import { useEffect, useState } from 'react';
import { choosemodel } from '../../states/counter/generaldata';
import { inittransferdata } from '../../states/counter/user';
import { inititranfer } from '../../states/counter/picture';
import image2 from '../../../public/3.jpg';
import { loadtemplates } from '../../states/action-creators/index';

const Container = ({  }) => {
    // const card = [
    //     { title: 'Navratri', imageURL: image2 },
    //     { title: 'Diwali', imageURL: image2 },
    //     { title: 'Eid', imageURL: image2 },
    //     { title: 'Christmas', imageURL: image2 },


    // ]

    const url = 'https://res.cloudinary.com/dx1iyidst/image/upload/v1730350505/cqvcmdshmzpjn2cyo7wa.png'
    const [card,setcard] = useState([{ title: 'Diwali', Photo: url, type: 'wedding'}]);

    useEffect(()=>{
        const getcards = async() =>{
            const resp = await loadtemplates(1,8)
            console.log(resp.data)
            setcard(resp.data)
        }
        getcards()
    },[])
    const [showform, setShowform] = useState(false);
    const handleshowform = () => {
        setShowform(true);
        console.log("Form will be visible now");
    };

    const navigator = useNavigate();
    const dispatch = useDispatch();

    const handdlechangetitle = (title) => {
        dispatch(changeTemplates(title));
    };

    const handleOpenNewTab = (path, title) => {
        // dispatch(choosemodel(title));
        // dispatch(inittransferdata());
        // dispatch(inititranfer());
        window.open(path, '_blank');
    };

    const GotoMore = () => {
        navigator('/show');
    };

    return (
        <div className="p-4">
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {card.map((image, index) => (
                    <div key={index} className="cursor-pointer" onClick={() => handleOpenNewTab(`/main/${image.title}`, image.title)}>
                        <img
                            src={image.Photo} // Fallback to `image2` if imageURL is null
                            alt={image.title}
                            className="w-full h-60 object-cover border-4 border-yellow-400 rounded-md"
                        />
                        <div className="text-center mt-2 text-sm font-semibold">{image.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Container;
