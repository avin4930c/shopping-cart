import { useEffect } from 'react';
import { LandingPage } from './components/landingPage';

function App() {
    // useEffect(() => {
    //     const twitchPostRequest = async () => {
    //         const clientId = 'xjfq2narip8mccvxj9uka1nltj86ej';
    //         const clientSecret = 'kv0nk9yvi8zbuvgj9o3d159jbj9a0f';
    //         const tokenEndPoint = 'https://id.twitch.tv/oauth2/token';

    //         try {
    //             const response = await fetch(tokenEndPoint, {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/x-www-form-urlencoded',
    //                 },
    //                 body: `client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
    //             });

    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch token');
    //             }

    //             const data = await response.json();
    //             const accessToken = data.access_token;
    //             console.log(accessToken);

    //             const igdbApiEndPoint = `https://api.igdb.com/v4/games`;
    //             const idgbResponse = await fetch(igdbApiEndPoint, {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Client-Id': clientId,
    //                     'Authorization': `Bearer ${accessToken}`,
    //                 },
    //                 body: JSON.stringify({
    //                     fields: '*',
    //                 }),
    //                 mode: 'no-cors',
    //             });

    //             if (!idgbResponse.ok) {
    //                 throw new Error('Failed to fetch data from idgb API');
    //             }

    //             const idgbData = await idgbResponse.json();
    //             console.log(idgbData);
    //         }

    //         catch (error: unknown) {
    //             console.error('Error:');
    //         }
    //     };

    //     twitchPostRequest();
    // }, []);
    return(
        <>
        <LandingPage />
        </>
    )
}

export default App
