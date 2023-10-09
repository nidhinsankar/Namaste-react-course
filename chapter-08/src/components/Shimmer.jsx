

export const ShimmerCard = () => {

    return (
        <div className="shimmer-card">
            <div className="shimmerBG media"></div>

            <div className="shimmerBG line-title"></div>
            <div className="shimmerBG line-title-small"></div>

            <div className="text-content">
                <div className="shimmerBG line1"></div>
                <div className="shimmerBG line1"></div>
                <div className="shimmerBG line1"></div>
                <div className="shimmerBG line2"></div>
            </div>
        </div>
    )
}

export const ShimmerBanner = () => {

    return (
        <div className="shimmer-banner">
            <div className="shimmer-restaurant shimmerBG">
                <div className="shimmerBG shimmer-left">
                    <div className="shimmerBG line-title"></div>
                    <div className="shimmerBG line1"></div>
                </div>
                <div className="shimmer-right shimmerBG"></div>
            </div>
        </div>
    )
}

export const ShimmerMenu = () => {

    return (
        <div className="shimmer-menu">
            {Array(11).fill(0).map(i => (
                <div className="shimmer-menu shimmerBG">
                <div className="shimmerBG shimmer-left">
                    <div className="shimmerBG line-title"></div>
                    <div className="shimmerBG line1"></div>
                </div>
                <div className="shimmerBG shimmer-right"></div>
            </div>
            ))}
        </div>
    )
}