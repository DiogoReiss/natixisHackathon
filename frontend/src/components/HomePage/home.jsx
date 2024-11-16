import Box from './box';
import FilterBox from './filters';

function Home() {
    return (
        <>
            <div className="container">
                <div className="col4 colL3 colM2 colS3">
                    <Box title="News" newTitle="BTC - 90341$" category="crypto" desc="Lorem Ipsum s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s" />
                </div>
                <div className="col5 colL3 colM2 colS3">
                    <Box title="Interest" newTitle="BTC - 90341$" category="crypto" desc="Lorem Ipsum s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s" />
                </div>
                <div className="col3 colL2 colM2 colS3">
                    <h4>Filters</h4>
                    <div className="box w-100">
                        <FilterBox title="Companys" optionsId="categoryId" options={[
                            { name: 'Apple' },
                            { name: 'Google' },
                            { name: 'Microsoft' },
                            { name: 'Tesla' },
                            { name: 'Amazon' },
                            { name: 'Facebook' },
                            { name: 'Netflix' },
                            { name: 'Twitter' },
                        ]} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
