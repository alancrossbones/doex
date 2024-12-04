try {
    // Code that might throw an error
    let result = potentiallyFailingFunction();
    console.log(result);
} catch (e) {
    console.error('An error occurred:', e.message);
    // Handle the error, possibly rethrow it or take other actions
}
