const SkillSet = ({skillName, percentage}) => {

    return(
    <div className="flex flex-col mb-4 xl:w-96 m-5 mt-5">
        <p className="text-xs font-bold">{skillName}</p>
        <div className="flex items-center">
            <div className="bg-blue-400 rounded h-1.5 w-16 mr-2" style={{"width":percentage}}></div>
            <p className="text-sm">{percentage}</p>
        </div>
    </div>
    )

}

export default SkillSet