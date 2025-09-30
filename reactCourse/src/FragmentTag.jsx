import { Fragment } from "react";

function FragmentTag(){
    return (
        // We cant return multiple html tags inside component, hence we need to use a parent element
        // As a parent element we can use div tag, but it will become unnecessary element in our html
        // Also div's display is block, even if I use elements with inline display, due to div, each components display will become block

        // <div>
        //     <h1>hii</h1>
        //     <h1>Hello</h1>
        // </div>

        // Hence we avoid using div as a parent element and we use fragment tag
        // Fragment tag do not create any extraa html element in main html file
        // To use Fragment tag first we need to import it
        
        // <Fragment>
        //     <h1>hii</h1>
        //     <h1>Hello</h1>
        // </Fragment>

        // We can also use Fragment tag like <> empty angular brackets, without importing Fragment tag
        <>
            <h1>hii</h1>
            <h1>Hello</h1>
        </>
    )
}

export default FragmentTag;