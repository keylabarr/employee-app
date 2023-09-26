import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'dynamicDataTransform'
})

export class DynamicDataTransformPipe implements PipeTransform
{
  transform(value: any, modifier: string) {
    if (!modifier)
    {
      return value;
    }

    if(value == undefined || value == null)
    {
      return ""
    }

    return eval(`this.${modifier}('${value}')`);
  }

  public longDate(value: any): string | null
  {
    return new DatePipe("es-MX").transform(value, 'EEEE dd/MM/yyyy hh:mm a');
  }

  public shortDate(value: any): string | null
  {
    return new DatePipe("es-MX").transform(value, 'dd/MM/yyyy');
  }

  public roundValue(value: any): string
  {
    return Math.floor(value).toString();
  }
}
