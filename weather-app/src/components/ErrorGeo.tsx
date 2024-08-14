interface IErrorGeoProps {
    weatherError?: string;
}

export function ErrorGeo({ weatherError }: IErrorGeoProps) {
    return (
        <div className="flex flex-col items-center justify-center mt-14">
            <p className="text-red-500">Error fetching weather data.</p>
            {weatherError ? (
                <p>{weatherError}</p>
            ) : (
                <>
                    <p>
                        Please ensure that geolocation is enabled in your
                        browser.
                    </p>
                    <p>If geolocation is enabled, try refreshing the page.</p>
                    <button
                        className="mt-4 p-2 bg-blue-500 text-white rounded"
                        onClick={() => window.location.reload()}
                    >
                        Refresh Page
                    </button>
                </>
            )}
        </div>
    );
}
