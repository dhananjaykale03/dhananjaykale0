import "./StarBackground.css";

const StarBackground = () => {
    const stars = Array.from({ length: 150 });

    return (
        <>
            <div className="background" />

            <div className="stars">
                {stars.map((_, index) => (
                    <span
                        key={index}
                        className="star"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default StarBackground;