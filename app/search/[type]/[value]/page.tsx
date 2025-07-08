interface SearchParams {
    type: 'obn' | 'oem' | 'fmc';
    value: string;
}


export default async function Page({ params }: { params: SearchParams }) {
    const { type, value } = params;

    if (!['obn', 'oem', 'fmc'].includes(type)) {
        return <div>Invalid search type</div>;
    }

    return <div>

        <p>Search Type: <strong>{type.toUpperCase()}</strong></p>
      <p>Search Value: <strong>{value}</strong></p>
    </div>;
}