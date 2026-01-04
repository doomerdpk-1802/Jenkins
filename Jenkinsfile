pipeline{
    agent {
        docker {
            image 'jenkins-node20:1.0'
            args '-u root'
        }
    }

    tools{
        nodejs 'node-20'
    }

    options{
        timestamps()
    }

    environment {
        CI = 'true'
    }

    stages{
        stage('CI Pipeline') {
            steps{
                script {
                    load 'jenkins/checkout_code.groovy'
                    load 'jenkins/install_dependencies.groovy'
                    load 'jenkins/lint.groovy'
                    load 'jenkins/coverage.groovy'
                    load 'jenkins/test.groovy'
                    load 'jenkins/build.groovy'
                }
            }
        }
    }


    post {
        success{
            echo "✅ CI passed successfully!"
        }
        failure{
           echo "❌ CI failed!"
        }
        always{
            cleanWs()
        }
    }
}