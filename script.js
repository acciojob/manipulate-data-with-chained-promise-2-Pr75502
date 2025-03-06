document.addEventListener("DOMContentLoaded", async () => {
    const outputDiv = document.getElementById("output");

    function delay(ms, value) {
        return new Promise(resolve => setTimeout(() => resolve(value), ms));
    }

    try {
        let array = await delay(3000, [1, 2, 3, 4]); // Initial delay
        let evens = array.filter(num => num % 2 === 0);

        await delay(1000); // Wait 1 second
        outputDiv.textContent = evens.join(",");

        let doubled = evens.map(num => num * 2);
        await delay(2000); // Wait 2 more seconds
        outputDiv.textContent = doubled.join(",");
    } catch (error) {
        console.error("Error:", error);
    }
});

