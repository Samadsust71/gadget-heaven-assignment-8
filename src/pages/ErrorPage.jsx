
import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
  return (
    <>
      <div id="error-page" className="flex flex-col justify-center items-center min-h-screen">
      
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error.status}</p>
      <p>
        Page { error.statusText}
      </p>
      <Link to={'/'} className="btn btn-error mt-4">Go back to Home</Link>
    </div>
    
    </>
    
  )
}

export default ErrorPage
