import { useEffect, useState } from 'react';

function MaquinaEscribir() {
    const texts = ['Programador Freelance.', 'Programador Mobile.', 'Programador Blockchain.'];
    const [index, setIndex] = useState(0);
    const [isDelete, setIsDelete] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isDelete) {
                setText((prevText) => prevText.substring(0, prevText.length - 1));
                if (text === '') {
                    setIsDelete(false);
                    setIndex((prevIndex) => (prevIndex + 1) % texts.length);
                }
            }
            else {
                setText((prevText) => texts[index].substring(0, prevText.length + 1));
                if (text === texts[index]) {
                    setIsDelete(true);
                }
            }
        }, isDelete ? 50 : 100); // Borra una letra cada 50 milisegundos, escribe una letra cada 100 milisegundos

        return () => {
            clearTimeout(timeout);
        };
    }, [text, index, texts,]);

    return (
        <div className="container">
            <div className="pr-4 text-center lg:text-left xl:text-left">
                <h1 className="xl:text-6xl lg:text-5x1 md:text-4x1 text-3xl font-bold items-center">
                    <span className="pb-4 text-titleName">Pau Ortega</span>
                </h1>
            </div>

            <div className="pr-4 items-center mx-7 lg:pr-0 lg:mx-0 xl:pr-0 xl:mx-0">
                <h2 className="font-bold xl:text-5xl lg:text-4x1 md:text-3x1 text-2xl mx-auto">
                    <span className="flex mt-12 text-white">
                        <span className={`transition-opacity duration-500 ${text ? 'opacity-100' : 'opacity-0'}  h-[12vh] md:h-[14vh] lg:h-[16vh] xl:h-[20vh]`}>
                            {text}
                        </span>
                    </span>
                </h2>
            </div>
        </div>


    )
}
export default MaquinaEscribir;