

export const ShimmerCard = () => {

    return (
        <div className=" bg-white shadow-md p-3 m-5 border border-slate-400 animate-pulse">
            <div className="h-[150px] my-3 bg-slate-500"></div>

            <div className="h-[30px] my-3 bg-slate-500"></div>
            <div className="h-[25px] my-3 bg-slate-500"></div>

            <div className="text-content">
                <div className="h-3 my-3 bg-slate-500"></div>
                <div className="h-3 w-[30%] my-3 bg-slate-500"></div>
                <div className="h-3 w-[30%] my-3 bg-slate-500"></div>
                <div className="h-3 w-[30%] my-3 bg-slate-500"></div>
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