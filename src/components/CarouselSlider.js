import React, { useEffect, useState } from 'react';


/* typescript props and state type as references
interface IProps {
    photos: IPhoto[];
    [key:string]: any;
}

interface IPhoto{
    caption:string;
    category:string;
    id:number;
    photo_validity:{text_undetected:boolean,face_detected:boolean};
    index:string;
    caption:string;
    url:string;
    [key:string]: any;
}

interface IState {
    dot:string || number; // 
}
*/

const CarouselSlider = (props) => {
    const { photos } = props;
    const [state, setState] = useState({
        dot: 5,
        photos: []
    });

    useEffect(() => {
        const photoshidden = photos.map(({ url }) => {
            return { url: url, display: "none" };
        })
        //show the first picture
        photoshidden[0].display = "block";

        //store in state for style display:none
        setState({ photos: photoshidden })
    }, [])

    useEffect(() => {
        //console.log(state.photos);
    }, [state.photos])


    // Thumbnail image controls
    function currentSlide(n) {//show current slide
        console.log(state.photos[n]);
        const updatedPhotos = state.photos.map((photo, index) => {
            if (n === index)
                photo.display = "block";
            else
                photo.display = "none";
            return photo;
        });
        setState({ ...state, photos: updatedPhotos });
    }

    return (
        <div className="slideshow-container">
            {
                state.photos.map((photo, index) => {
                    return (
                        <div key={`carouselimage-${index}`} className="mySlides fade" style={{ display: photo.display }}>
                            <img src={photo.url} />
                        </div>)
                })
            }

            <div style={{ textAlign: "center", position: "absolute", left: "90px", bottom: "10px" }}>
                <span className="dot" onClick={() => currentSlide(0)}></span>
                <span className="dot" onClick={() => currentSlide(1)}></span>
                <span className="dot" onClick={() => currentSlide(2)}></span>
                <span className="dot" onClick={() => currentSlide(3)}></span>
                <span className="dot" onClick={() => currentSlide(4)}></span>
            </div>
        </div>)
}

export default CarouselSlider;