export function Private_policy_section(props) {
    const {private_policy_section_data} = props;
    const private_policy_section_data_js = [
        {
            id_h1: 1111,
            private_policy_h1: "H1: ctfygbuknijlm",
            private_policy_container_h2: [
                {
                    id_h2: 111112,
                    private_policy_h2: "H2: ctfygbuknijlm",
                    private_policy_container_h3: [
                        {
                            id_h3: 12,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        },
                        {
                            id_h3: 13,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        },
                        {
                            id_h3: 14,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        },
                        {
                            id_h3: 15,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        },
                        {
                            id_h3: 16,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        },
                        {
                            id_h3: 17,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        }
                    ]
                },
                {
                    id_h2: 1234456,
                    private_policy_h2: "H2: ctfygbuknijlm",
                    private_policy_container_h3: [
                        {
                            id_h3: 11232,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        },
                        {
                            id_h3: 15658,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        },
                        {
                            id_h3: 1789856,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        },
                        {
                            id_h3: 4647561,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        },
                        {
                            id_h3: 65756761,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        },
                        {
                            id_h3: 978641,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        }
                    ]
                },
                {
                    id_h2: 145645676,
                    private_policy_h2: "H2: ctfygbuknijlm",
                    private_policy_container_h3: [
                        {
                            id_h3: 12435365,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        },
                        {
                            id_h3: 1567567,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        },
                        {
                            id_h3: 6781678,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        },
                        {
                            id_h3: 1678678,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        },
                        {
                            id_h3: 1576524,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        },
                        {
                            id_h3: 16987354,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        }
                    ]
                }
            ]
        },
        {
            id_h1: 1123456,
            private_policy_h1: "H1: ctfygbuknijlm",
            private_policy_container_h2: [
                {
                    id_h2: 1231231,
                    private_policy_h2: "H2: ctfygbuknijlm",
                    private_policy_container_h3: [
                        {
                            id_h3: 12312311,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        },
                        {
                            id_h3: 1231231,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        },
                        {
                            id_h3: 1123123,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        },
                        {
                            id_h3: 11231223,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        },
                        {
                            id_h3: 1435,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        },
                        {
                            id_h3: 145685,
                            private_policy_h3: "H2: ctfygbuknijlm"
                        }
                    ]
                }
            ]
        }
    ];

    return (
        <section className="privacy-policy-section section">
            <div className="privacy-policy-container container">
                <h1 className="privacy-policy__title">{private_policy_section_data.private_policy_page_title}</h1>
                <ol className="privacy-policy__list-1">
                    {private_policy_section_data_js.map((private_policy) => (
                        <li key={private_policy.id_h1} className="privacy-policy__list-1__title">{private_policy.private_policy_h1}
                            <ol className="privacy-policy__list-2">
                                {private_policy.private_policy_container_h2.map((private_policy_2) => (
                                    <li key={private_policy_2.id_h2} className="privacy-policy__list-2__title">{private_policy_2.private_policy_h2}
                                        <ol className="privacy-policy__list-3">
                                            {private_policy_2.private_policy_container_h3.map((private_policy_3) => (
                                                <li key={private_policy_3.id_h3} className="privacy-policy__list-3__title">{private_policy_3.private_policy_h3}</li>
                                            ))}
                                        </ol>
                                    </li>
                                ))}
                            </ol>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}