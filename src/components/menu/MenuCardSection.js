// React/Next -----------------------------------------------------------------------
// Styles ---------------------------------------------------------------------------
// Components -----------------------------------------------------------------------
import MenuCard from './MenuCard';
// Other ----------------------------------------------------------------------------
import { isArray, valueReturnHelper } from '@/util';



//______________________________________________________________________________________
// ===== Component  =====

/**
 * Component that creates a section of menu cards based on data provided, with options for customizing the layout.
 * @prop data - array of objects that contain information about each menu card to be displayed in the section.
 * @prop [forceColsOneRow=false] - boolean parameter that determines whether the MenuCard items should be forced to display in a single row, regardless of the number of columns specified in the columnSizes property of each MenuCard object. 
 * @prop [largeTitle=false] - boolean that determines whether or not the title of the menu cards should be displayed in a larger font size. 
 * @returns section of MenuCards
 */
const MenuCardSection = ({data, pathSoFar=null, forceColsOneRow = false, largeTitle = false, columnSizes=null}) => {
        
    //______________________________________________________________________________________
    // ===== Render Functions  =====

    const renderContent = () => {
        let navArray = [];
        if(isArray(data)){
            data.forEach((obj, index) => {
                if(obj.doNotShow || obj.onlyShowInNav){
                    // Do nothing because we should not show this here
                }
                else{
                    navArray.push( 
                        <MenuCard 
                            key={index} 
                            id={obj.id} 
                            link={valueReturnHelper(obj.link)}
                            display={valueReturnHelper(obj.display)}
                            description={valueReturnHelper(obj.description)}
                            frontImage={valueReturnHelper(obj.frontImage)}
                            backImage={valueReturnHelper(obj.backImage)}
                            columnSizes={columnSizes ? columnSizes : valueReturnHelper(obj.columnSizes, "isObj")}
                            disabledReason={valueReturnHelper(obj.disabledReason)}
                            largeTitle={largeTitle}
                            pathSoFar={pathSoFar}
                        /> 
                    )
                }
            });
        }
        return navArray;
    }

    //______________________________________________________________________________________
    // ===== Component Return =====

    if(isArray(data)){
        return(
            <div className="row">
                {renderContent()}
            </div>
        )
    }
    console.warn("No navagation data given to MenuCardSection:", data)
    return <div></div>
}
export default MenuCardSection;