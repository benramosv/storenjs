interface CategoryProps {
    params: {
        categories: string[],
        searchParams?: string
    },
    //searchParams?:{[key:string]:string}
}

export default async function Category(props: CategoryProps) {
    console.log(props);
    const { categories } = await props.params;
    console.log(categories);
    return (
        <h1>Categoría dinámica: {categories.join(", ")} </h1>
    );
}