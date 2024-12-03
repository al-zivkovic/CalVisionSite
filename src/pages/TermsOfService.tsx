import { tosContent } from '../constants/tosContent';

const TermsOfService = () => {
    return (
        <section className="relative w-full mx-auto pl-8 pr-8 pb-8">
            {/* Main Title */}
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            
            {/* Metadata Section */}
            <div className="mt-8 mb-8">
                <p className="mb-6">Last updated on <strong>November 30, 2024</strong></p>
                <p>Please read these terms and conditions carefully before using Our Service.</p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
                <ul className="list-disc pl-6 space-y-2">
                    {Object.entries(tosContent).map(([key, section]) => (
                        <li key={key} className='list-none'>
                            <a href={`#${key}`} className="text-blue-500 hover:underline">
                                {section.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Loop through all sections in tosContent */}
            {Object.entries(tosContent).map(([key, section]) => (
                <ContentBlock key={key} id={key} title={section.title} content={section} />
            ))}
        </section>
    );
};

const ContentBlock = ({ id, title, content }: { id: string; title: string; content: any }) => {
    return (
        <div id={id} className="mb-8">
            {/* Section Title */}
            <h2 className="text-2xl font-bold mb-6">{title}</h2>
            
            {/* Dynamically Render Each Subsection */}
            {Object.keys(content)
                .filter((key) => key !== 'title') // Exclude the title from content rendering
                .map((key, index) => (
                    <p key={index} className="mb-6">
                        {content[key]}
                    </p>
                ))}
        </div>
    );
};

export default TermsOfService;
