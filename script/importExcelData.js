const STRAPI_URL = "http://localhost:1337";
const STRAPI_TOKEN =
    "85441b60c04596b57fb15e1cc4bfd17b7fe9fcfe841dbee8bb15f43e385bbd9c2af148bca361d54677242efe4c0efc5cabb915beb5850b0d32111f32b3649d63f73b3cf4486638bfbdc1fb5cba605506d5fc347837f26ff97604ee93d83868d16add5722aae7e6cce8336f894f3702b78a78f500788c226dc99c2614e76c7365";

// Example data to import
const models = [
    {
        name: "U5",
        active: "1",
        brand: "3",
    },
    {
        name: "Crossline",
        active: "1",
        brand: "5",
    },
    {
        name: "146",
        active: "1",
        brand: "7",
    },
    {
        name: "147",
        active: "1",
        brand: "7",
    },
    {
        name: "155",
        active: "1",
        brand: "7",
    },
    {
        name: "156",
        active: "1",
        brand: "7",
    },
    {
        name: "159",
        active: "1",
        brand: "7",
    },
    {
        name: "164",
        active: "1",
        brand: "7",
    },
    {
        name: "166",
        active: "1",
        brand: "7",
    },
    {
        name: "33",
        active: "1",
        brand: "7",
    },
    {
        name: "4C",
        active: "1",
        brand: "7",
    },
    {
        name: "75",
        active: "1",
        brand: "7",
    },
    {
        name: "8C",
        active: "1",
        brand: "7",
    },
    {
        name: "Brera",
        active: "1",
        brand: "7",
    },
    {
        name: "Giulia",
        active: "1",
        brand: "7",
    },
    {
        name: "Giulietta",
        active: "1",
        brand: "7",
    },
    {
        name: "GT",
        active: "1",
        brand: "7",
    },
    {
        name: "Mito",
        active: "1",
        brand: "7",
    },
    {
        name: "Spider",
        active: "1",
        brand: "7",
    },
    {
        name: "GTV",
        active: "1",
        brand: "7",
    },
    {
        name: "Stelvio",
        active: "1",
        brand: "7",
    },
    {
        name: "A110",
        active: "1",
        brand: "9",
    },
    {
        name: "A310",
        active: "1",
        brand: "9",
    },
    {
        name: "A610",
        active: "1",
        brand: "9",
    },
    {
        name: "GTA",
        active: "1",
        brand: "9",
    },
    {
        name: "DB7",
        active: "1",
        brand: "5",
    },
    {
        name: "DB9",
        active: "1",
        brand: "5",
    },
    {
        name: "Rapide",
        active: "1",
        brand: "5",
    },
    {
        name: "Vantage",
        active: "1",
        brand: "5",
    },
    {
        name: "Virage",
        active: "1",
        brand: "5",
    },
];

async function createModel(modelData) {
    try {
        const response = await fetch(`${STRAPI_URL}/api/models`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${STRAPI_TOKEN}`,
            },
            body: JSON.stringify({
                data: modelData,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            throw new Error(
                `HTTP error! status: ${response.status}, message: ${
                    errorData?.error?.message || response.statusText
                }`
            );
        }

        const data = await response.json();
        console.log("Model created:", data);
        return data;
    } catch (error) {
        console.error("Error creating model:", error.message);
        throw error; // Re-throw to handle in importAllModels
    }
}

async function importAllModels() {
    console.log("Starting import...");
    let successCount = 0;
    let errorCount = 0;

    for (const model of models) {
        try {
            await createModel(model);
            successCount++;
            console.log(
                `Progress: ${successCount + errorCount}/${
                    models.length
                } models processed`
            );
        } catch (error) {
            errorCount++;
            console.error(`Failed to import model: ${model.name}`);
        }
    }

    console.log("Import completed!");
    console.log(`Successfully imported: ${successCount} models`);
    console.log(`Failed to import: ${errorCount} models`);
}

async function deleteAllModels() {
    try {
        const response = await fetch(`${STRAPI_URL}/api/models`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${STRAPI_TOKEN}`,
            },
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            throw new Error(
                `HTTP error! status: ${response.status}, message: ${
                    errorData?.error?.message || response.statusText
                }`
            );
        }

        console.log("All models deleted successfully");
    } catch (error) {
        console.error("Error deleting models:", error.message);
    }
}

// Run the import
importAllModels();
// deleteAllModels();
