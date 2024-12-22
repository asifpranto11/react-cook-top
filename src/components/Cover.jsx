import image from '../assets/images/cook.jpg';

const Cover = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${image})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">
                            Discover an exceptional cooking class tailored for you!
                        </h1>
                        <p className="mb-5">
                            Cooking subscribers get exclusive access to our best-in-class app, with our full catalog of more than 22,000 recipes, personalized recommendations, and video tutorials.
                        </p>
                        <div className="flex justify-center gap-8">
                            <button className="btn btn-primary">Explore Now</button>
                            <button className="btn btn-primary">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;
