function maximumImportance(n: number, roads: number[][]): number {
    const cityImportance: Map<number, number> = new Map();

    for (const road of roads) {
        const [city1, city2] = road;
        cityImportance.set(city1, (cityImportance.get(city1) || 0) + 1);
        cityImportance.set(city2, (cityImportance.get(city2) || 0) + 1);
    }

    const sortedCities = [...cityImportance.keys()].sort((a, b) => {
        return (cityImportance.get(b) || 0) - (cityImportance.get(a) || 0);
    });

    const valuesAssigned: Map<number, number> = new Map();
    let value = n;
    let totalImportance = 0;

    for (const city of sortedCities) {
        valuesAssigned.set(city, value);
        value -= 1;
    }

    for (const road of roads) {
        const [city1, city2] = road;
        totalImportance += (valuesAssigned.get(city1) || 0) + (valuesAssigned.get(city2) || 0);
    }

    return totalImportance;
};