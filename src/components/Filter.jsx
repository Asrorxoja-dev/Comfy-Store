import { Form, Link, useLoaderData } from "react-router-dom";
import { FormInput } from "../components";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
function Filter() {
    const {meta} = useLoaderData()
  return (
    <div>
      <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        <FormInput
          type="search"
          label="Search product"
          name="search"
          size="input-sm"
        />
        <FormSelect 
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        />

     <FormSelect 
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
        />

<FormSelect 
        label="sort by"
        name="order"
        list={["a-z","z-a","high","low"]}
        size="select-sm"
        />
        <FormRange name="price" size="range-sm" label="select price"/>
        <button className="btn btn-primary mb-3 mt-3 btn-sm">
            Search 
        </button>
        <Link to="/products" className="btn btn-accent btn-sm" >
        Reset
        </Link>
      </Form>
    </div>
  );
}

export default Filter;
