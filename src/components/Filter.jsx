import { Form, Link, useLoaderData } from "react-router-dom";
import { FormInput } from "../components";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";
function Filter() {
  const { meta } = useLoaderData();
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
          list={["a-z", "z-a", "high", "low"]}
          size="select-sm"
        />
        <FormRange name="price" size="range-sm" label="select price" />
        <FormCheckbox
          name="shipping"
          defaultValue={false}
          size="checkbox-sm"
          label="free shipping"
        />
        <button className="btn btn-primary sm:mb-3 mt-7 btn-sm">Search</button>
        <Link to="/products" className="btn sm:mb-3 mt-7 btn-accent btn-sm">
          Reset
        </Link>
      </Form>
    </div>
  );
}

export default Filter;
