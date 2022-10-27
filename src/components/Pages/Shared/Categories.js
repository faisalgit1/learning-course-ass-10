import Courses from '../Courses';
import Category from './Category'
const Categories = () => {

    return (
        <div class="flex p-6">
            <div class="flex-none  border
                 border-slate-500 w-80  ...">
                <Category></Category>
            </div>
            <div class="grow border  border-slate-500  ">
                <Courses></Courses>
            </div>

        </div>
    );
};

export default Categories;