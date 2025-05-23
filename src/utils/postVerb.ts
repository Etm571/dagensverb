export const postVerb = async (verb: string): Promise<void> => {
    try {
        const response = await fetch('/api/verbRequest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ request: verb }),
        });

        if (response.status === 201) {
            console.log('Verb sent successfully');
            return;
        }

        if (response.status === 409) {
            return;
        }

        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

    } catch (error) {
        console.error('Could not send verb: ', error);
    }
};
