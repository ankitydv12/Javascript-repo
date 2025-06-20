/*Fetch:
    fetch() method that send  network request to the server and load new information 
    Example:
        Submit an order 
        Load user information
        Receive latest updates from the server
    All these are done without the reload the page
    
    The Synatx: 
        let promise = fetch(url,[option])
        * url – the URL to access.
        * options – optional parameters: method, headers etc.
        Note: fetch reture a Promise object
        Without options, this is a simple GET request, downloading the contents of the url

        The Promise return by fetch is internally resolve with an buil in Response class
        The Promise is rejected if the fetch was unable to make an http request e.g newtwork problem . 
        Note: Abnormal HTTP0-status such as as 404 and 500 do not cause an error
        We can see HTTP-status in response properties:

            status – HTTP status code, e.g. 200.
            ok – boolean, true if the HTTP status code is 200-299.
        For Example:
            let response = await fetch(url);
            if (response.ok) { // if HTTP-status is 200-299
            // get the response body (the method explained below)
            let json = await response.json();
            } else {
            alert("HTTP-Error: " + response.status);
            }
        

            Response provides multiple promise-based methods to access the body in various formats:

                response.text() – read the response and return as text,
                response.json() – parse the response as JSON,
                response.formData() – return the response as FormData object (explained in the next chapter),
                response.blob() – return the response as Blob (binary data with type),
                response.arrayBuffer() – return the response as ArrayBuffer (low-level representation of binary data),
                additionally, response.body is a ReadableStream object, it allows you to read the body chunk-by-chunk, we’ll see an example later.

                
    */