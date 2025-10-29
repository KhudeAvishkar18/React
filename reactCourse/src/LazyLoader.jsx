// Lazy Loader is used to show the component only when required (ex. on button click)
// By using Lazy Loader, we can load particular jsx file only when we need to show its content
// In below example, we will load User component file only if button is clicked.
// In this way we avoid loading of unnecessary files at initial stage.
// This also optimizes performance of our react app.
 
import { lazy, Suspense, useState } from "react"
 
// import User from "./User"
// for lazy loading, import like this
const User = lazy(() => import('./User'));
// lazy function is used to import the component in lazy manner
 
export default function LazyLoading(){
 
    const [showLoader, setShowLoader] = useState(false);
    return (
        <>
            {
                showLoader && <Suspense fallback={<h3>Loading ...</h3>}><User /></Suspense>
                // Suspense tag is having fallback attribute in which we can set what we want to display on screen while loading time
            }
            <button onClick={() => setShowLoader(true)}>Show User</button>
        </>
    )
}