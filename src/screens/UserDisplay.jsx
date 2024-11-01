import { GetWeddingdata } from "@/states/action-creators/handledatasave";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RenderPage } from "@/exports/functions";
import Model4 from "@/Models/F4/mainpage";
import { Model3 } from "@/exports/exportsModule";
const UserDisplay = () => {
    const { id } = useParams();
    const [modelId, setModelId] = useState(''); // Will hold the modelId after fetching
    const [loading, setLoading] = useState(true); // Loading state
    const [data, setData] = useState(
        {
            weddingDetails:{
                brideName:'',
                groomName:'',
                location:'',
                weddingDate:'',
                story:'',
            },
            _id:'',
            email:'',
            events:[
                {
                name:'',
                date:'',
                description:'',
                _id:'',
                }
            ],
            invitedBy:[''],
            photo:'',
            map_url:'',
            imagearray:[''],
            modelId:'',
        }
    )

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await GetWeddingdata(id);
                console.log('data', data);
                setData(data)
                
                // Store data in sessionStorage
                // sessionStorage.setItem('weddingDetails', JSON.stringify(data.weddingDetails));
                // sessionStorage.setItem('events', JSON.stringify(data.events));
                // sessionStorage.setItem('locationUrl', data.map_url);
                // sessionStorage.setItem('imagep', JSON.stringify(data.photo));
                
                // Set modelId from fetched data
                setModelId(data.modelId);
            } catch (error) {
                console.error('Error fetching wedding data:', error);
            } finally {
                setLoading(false); // Stop loading once data is fetched
            }
        };

        getData();
    }, [id]);

    // Conditionally render based on loading state
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Loading...</p> {/* Show loading indicator */}
            </div>
        );
    }

    // Render the ModelComponent after loading is complete
    // const ModelComponent = RenderPage(modelId);


    return (
        <div className="w-screen h-screen overflow-y-scroll" id="scroll">
            {/* <ModelComponent/> Show message if modelId is not valid */}
            <div className="w-screen h-screen overflow-y-scroll " id="scroll">
                {
                    modelId === 'Classic and Elegant' ? <Model4 data={data} /> :
                        modelId === 'Elegance in Bloom' ? <Model3 data={data} /> :
                            modelId === 'Eternal Bloom' ? <Delevlopment /> :
                                modelId === 'Modern Minimalist Theme' ? <Delevlopment /> :
                                    modelId === 'Vintage Art Deco Theme' ? <Delevlopment /> :
                                        modelId === 'Rustic and Bohemian Theme' ? <Delevlopment /> :
                                            modelId === 'Romantic Watercolor Theme' ? <Delevlopment /> :
                                                modelId === 'timeless Romance' ? <Delevlopment /> :
                                                    modelId === 'Romantic Watercolor Theme' ? <Delevlopment /> :
                                                        <div>Invalid Model</div>

                }
            </div>
        </div>
    );
};

export default UserDisplay;
