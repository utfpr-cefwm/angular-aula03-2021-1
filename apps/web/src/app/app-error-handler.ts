import { HttpErrorResponse } from "@angular/common/http";
import {
  ErrorHandler,
  Injectable,
  NgZone,
} from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable()
export class AppErrorHandler extends ErrorHandler {

  constructor(
    private ngZone: NgZone,
    private messageService: MessageService,
  ) {
    super();
  }

  public handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      return this.handleHttpErrorResponse(error);
    }
    console.error(error);
  }

  private handleHttpErrorResponse(error: HttpErrorResponse) {
    this.ngZone.run(() => {
      this.messageService.add({
        severity: 'error',
        summary: `Erro de servidor: [${error.status}] ${error.statusText}`,
        detail: `${error.error}`,
      });
    });
  }

}
