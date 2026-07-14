import Link from "next/link";
import Image from "next/image";

export default function WritingPage() {
    return (
        <>
            <section className="section-sm">
                <div className="container">
                    <h1 className="heading-lg">Writing</h1>

                    <p>
                        Thoughts on digital systems, development,
                        business, and technology.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-md gap-lg">

                        <div className="card">
                            <div className="card__media">
                                <Image src="/images/Test.webp" alt="Why I Don’t Use React Query" width={1200} height={630} />
                            </div>
                            <div className="card__body">
                                <h2 className="heading-md">
                                    <Link href="/writing/2024/06/01/why-i-dont-use-react-query">
                                        Why I Don’t Use React Query
                                    </Link>
                                </h2>
                                <p className="text-body">
                                    React Query is a popular library for data
                                    fetching and state management in React
                                    applications. However, I have chosen not to
                                    use it in my projects. In this article, I
                                    will explain my reasons for this decision.
                                </p>
                            </div>
                            <div className="card__footer">
                                <Link className="btn btn-primary" href="/writing/2024/06/01/why-i-dont-use-react-query">
                                    Read more
                                </Link>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card__media">
                                <Image src="/images/Test.webp" alt="Why I Don’t Use React Query" width={1200} height={630} />
                            </div>
                            <div className="card__body">
                                <h2 className="heading-md">
                                    <Link href="/writing/2024/06/01/why-i-dont-use-react-query">
                                        Why I Don’t Use React Query
                                    </Link>
                                </h2>
                                <p className="text-body">
                                    React Query is a popular library for data
                                    fetching and state management in React
                                    applications. However, I have chosen not to
                                    use it in my projects. In this article, I
                                    will explain my reasons for this decision.
                                </p>
                            </div>
                            <div className="card__footer">
                                <Link className="btn btn-primary" href="/writing/2024/06/01/why-i-dont-use-react-query">
                                    Read more
                                </Link>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card__media">
                                <Image src="/images/Test.webp" alt="Why I Don’t Use React Query" width={1200} height={630} />
                            </div>
                            <div className="card__body">
                                <h2 className="heading-md">
                                    <Link href="/writing/2024/06/01/why-i-dont-use-react-query">
                                        Why I Don’t Use React Query
                                    </Link>
                                </h2>
                                <p className="text-body">
                                    React Query is a popular library for data
                                    fetching and state management in React
                                    applications. However, I have chosen not to
                                    use it in my projects. In this article, I
                                    will explain my reasons for this decision.
                                </p>
                            </div>
                            <div className="card__footer">
                                <Link className="btn btn-primary" href="/writing/2024/06/01/why-i-dont-use-react-query">
                                    Read more
                                </Link>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card__media">
                                <Image src="/images/Test.webp" alt="Why I Don’t Use React Query" width={1200} height={630} />
                            </div>
                            <div className="card__body">
                                <h2 className="heading-md">
                                    <Link href="/writing/2024/06/01/why-i-dont-use-react-query">
                                        Why I Don’t Use React Query
                                    </Link>
                                </h2>
                                <p className="text-body">
                                    React Query is a popular library for data
                                    fetching and state management in React
                                    applications. However, I have chosen not to
                                    use it in my projects. In this article, I
                                    will explain my reasons for this decision.
                                </p>
                            </div>
                            <div className="card__footer">
                                <Link className="btn btn-primary" href="/writing/2024/06/01/why-i-dont-use-react-query">
                                    Read more
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    );
}
