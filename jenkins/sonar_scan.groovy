stage('SonarQube Analysis'){
    withCredentials([string(credentialsId: 'sonar-token', variable:'SONAR_TOKEN')] {
        sh '''
        echo "Running SonarQube Scan"
        sonar-scanner \
          - Dsonar.projectKey=todo-jenkins \
          - Dsonar.sources=app \
          - Dsonar.test=__tests__ \
          - Dsonar.host.url=http://Sonarqube:9000 \
          - Dsonar.login=$SONAR_TOKEN
        '''
    })
}