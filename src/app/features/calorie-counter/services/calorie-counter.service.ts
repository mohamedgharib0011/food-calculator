import { Injectable } from '@angular/core';
import { map, mapTo, filter } from 'rxjs/operators';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { IFood } from '../models/food.interface';
import { Observable } from 'rxjs';
import { selectFoodList } from '../store/selectors/food.selectors';

@Injectable()
export class CalorieCounterService {

    constructor(private http: HttpClient) { }

    searchFood(searchTerm: String): Observable<IFood[]> {
        return this.http.get('../../../assets/food-raw-data.json')
            .pipe(
                map(
                    (res: Response) => {
                        return this.mapToIFood(res['data'], searchTerm);
                    }
                )
            );
    }

    mapToIFood(foodRowArr: any[], searchTerm: String): IFood[] {
        let foodList = [];
        foodRowArr
            .forEach(foodRow=>{
                if(foodRow.Display_Name.indexOf(searchTerm)>-1){
                    foodList.push(
                        {
                            code: foodRow.Food_Code,
                            name: foodRow.Display_Name,
                            calories: foodRow.Calories
                        }
                    )
                }
            });
            

        return foodList;
    }
}