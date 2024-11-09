try {
    // console.log(b);
    try {
        console.log(a);
    } catch (error) {
        console.log("catched-1");
    }
} catch (error) {
    console.log("catched-2");
}